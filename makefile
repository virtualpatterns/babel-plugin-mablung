
ifeq ($(origin projectPath),undefined)
export projectPath := $(CURDIR)
endif

include $(projectPath)/node_modules/@virtualpatterns/mablung-makefile/makefile

$(currentReleasePath)/%.cjs: babelFlag += --env-name commonjs --keep-file-extension
$(currentReleasePath)/%.js: babelFlag += --env-name esmodule --keep-file-extension

# "scripts": {
# 	"refresh": "rm -Rf node_modules package-lock.json && npm install",
# 	"upgrade:10": "npm-check-updates --upgrade",
# 	"upgrade:20": "shx rm -f package-lock.json",
# 	"upgrade:30": "npm install",
# 	"upgrade": "run-s --silent upgrade:*",
# 	"clean:10": "shx rm -Rf coverage release",
# 	"clean": "run-s --silent clean:*",
# 	"lint:10": "eslint --ignore-path .gitignore source",
# 	"lint:20": "check-dependency",
# 	"lint": "run-s --silent lint:*",
# 	"build:10": "cross-env NODE_ENV=commonjs babel source --copy-files --extensions .cjs --keep-file-extension --out-dir release --source-maps",
# 	"build:20": "cross-env NODE_ENV=esmodule babel source              --extensions .js  --keep-file-extension --out-dir release --source-maps",
# 	"build": "run-s --silent clean lint build:*",
# 	"test:10": "c8 ava",
# 	"test": "run-s --silent build \"test:10 {@}\" --",
# 	"run:10": "node --no-warnings --unhandled-rejections=strict",
# 	"run": "run-s --silent build \"run:10 {@}\" --",
# 	"pre:push:10": "git add coverage release",
# 	"pre:push:20": "git commit --message=\"post-test\"",
# 	"pre:push": "run-s --silent test pre:push:*",
# 	"push:10": "npm version prerelease",
# 	"push:20": "git push origin master",
# 	"push": "run-s --silent pre:push push:*"
# },
