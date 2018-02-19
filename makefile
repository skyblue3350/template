ENTRYPOINT=app.py

dev:
	ENV=development python ${ENTRYPOINT}

prod: test
	ENV=production npm run build
	ENV=production python ${ENTRYPOINT}

test:
	python -m unittest discover tests

