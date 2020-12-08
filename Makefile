all:
	rm -rf .vuepress/dist
	npm run build
	rm -rf dipper-docs.zip
	node archive.js
