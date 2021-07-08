
ifeq ($(origin mablung-makefile-path),undefined)
export mablung-makefile-path := $(shell npx mablung-makefile get-path)
endif

include $(mablung-makefile-path)

$(project-path)/release/%.cjs: babel-parameter := --env-name commonjs --keep-file-extension
$(project-path)/release/%.js: babel-parameter := --env-name esmodule --keep-file-extension

export project-name := $(notdir $(project-path))

test::
	@npx mkdir -p ../Shared/$(project-name)
	@npx shx rm -Rf ../Shared/$(project-name)/coverage
	@npx shx cp -R coverage ../Shared/$(project-name)
