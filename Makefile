start: stop serve

serve:
	cd public && nohup python -m SimpleHTTPServer 12345 &

stop:
	python server/stop.py
	rm -f nohup.out
