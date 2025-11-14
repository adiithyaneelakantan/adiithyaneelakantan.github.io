#!/usr/bin/env python3
"""
Simple HTTP server to serve the static portfolio website.
Run this script to view the portfolio locally.
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def log_message(self, format, *args):
        # Custom log format
        sys.stderr.write("%s - - [%s] %s\n" %
                        (self.address_string(),
                         self.log_date_time_string(),
                         format%args))

if __name__ == "__main__":
    # Change to the script's directory
    os.chdir(Path(__file__).parent)
    
    Handler = MyHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"🚀 Server starting at http://localhost:{PORT}")
            print(f"📁 Serving directory: {os.getcwd()}")
            print(f"🌐 Open your browser to: http://localhost:{PORT}")
            print("\nPress Ctrl+C to stop the server\n")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n👋 Server stopped. Goodbye!")
        sys.exit(0)
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Port {PORT} is already in use.")
            print(f"💡 Try a different port: python3 serve.py {PORT + 1}")
            sys.exit(1)
        else:
            raise

