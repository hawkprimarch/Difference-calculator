install:
			npm ci
publish:
			npm publish --dry-run
lint:
			npx eslint .
gendiff:
			node bin/gendiff.js
test:
			NODE_OPTIONS=--experimental-vm-modules npx jest
test-coverage:
			npx -n --experimental-vm-modules jest --coverage