#!/usr/bin/env python3
"""Local static preview, following the repository's Vercel rewrite order.
Not a replacement for a Vercel deployment test; serverless APIs are unavailable.
"""
import argparse
import json
import re
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]

class PreviewHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        original = urlsplit(self.path).path
        candidate = (ROOT / original.lstrip('/')).resolve()
        if candidate.is_relative_to(ROOT) and candidate.is_file():
            return super().do_GET()
        if original.startswith('/api/') or original.startswith('/u/'):
            self.send_error(501, 'Serverless APIs are not available in the local preview')
            return
        for rule in json.loads((ROOT / 'vercel.json').read_text())['rewrites']:
            pattern = re.sub(r':\w+', '[^/]+', rule['source'])
            if re.fullmatch(pattern, original):
                self.path = rule['destination']
                return super().do_GET()
        self.send_error(404)

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=3000)
    args = parser.parse_args()
    server = ThreadingHTTPServer(('0.0.0.0', args.port), partial(PreviewHandler, directory=str(ROOT)))
    print(f'AnalystWorld preview listening on 0.0.0.0:{args.port}', flush=True)
    server.serve_forever()
