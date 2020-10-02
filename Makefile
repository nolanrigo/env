start:

dev:
	npx tsc -w --noEmit

build: clean
	npx tsc --outDir dist/

clean:
	rm -rf dist/
