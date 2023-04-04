# makeshift-ctrl

Desktop interface for the MakeShift

## What is everything?

Everything is pain and under construction.

## Setting up Development Environment

Required tooling:

- git - <https://git-scm.com/>
- nodejs - node and npm (see below)
- some sort of IDE (see below)

### NodeJS version management

Using nvm is optional but *highly* recommended to keep the chaos of node versioning somewhat contained.

Linuxs/MacOS: nvm - <https://github.com/nvm-sh/nvm>

Windows: nvm-windows - <https://github.com/coreybutler/nvm-windows>

#### nvm gotchas

Make sure to install the correct version of node as specified in `makeshift-ctrl/.nvmrc`

i.e. `nvm install 16.17.0`

The pinned version of node is always available in the `.nvmrc`, this documentation could be out of date!

### IDE Setup

This project has been developed in [emacs](https://www.gnu.org/software/emacs/) and [vscode](https://code.visualstudio.com/). For beginners, vscode is likely easier to start with.

#### VSCode

Download - <https://code.visualstudio.com/>

[Windows Terminal](https://learn.microsoft.com/en-us/windows/terminal/install) terminal is optional but somewhat recommended. VSCode's internal terminal is often quite clunky.

Plugins:

- Vue Language Features: <https://github.com/johnsoncodehk/volar/tree/master/extensions/vscode-vue-language-features>

#### Emacs

Download - <https://www.gnu.org/software/emacs/>

Emacs 28+ is highly recommended, native-comp speeds things up greatly. All Emacs development has been using Doom Emacs, it is untested under vanilla so some tinkering may be required to get code completion/etc. working.

Useful extensions:

- treemacs: <https://github.com/Alexander-Miller/treemacs>
- vterm: <https://github.com/akermu/emacs-libvterm>
- lsp-mode with volar client: <https://github.com/emacs-lsp/lsp-mode>

## Development First Steps

Once your environment is ready, you'll need to get the code through git.

### Obtaining Code

Clone repo:

```bash
git clone https://github.com/EosFoundry/makeshift-ctrl.git
```

Install package dependencies

```bash
cd makeshift-ctrl/
npm install
```

### Branch

Generally `dev` branch will contain the latest, likely-broken code that is being worked on. `main` is where stable commits are applied to.

### Building and Runninng

Once you have the code, you're ready to run the dev server.

This section assumes the reader has set up a dev environment and has cloned the project

### Running

Run the development server:

```bash
npm run dev
```

This will launch a live application that should respond to code changes after files are saved.

### Building

Build a package:

```bash
npm run build
```

The build output can be found in `./release` once the build completes, the options can be tweaked and fiddled with in `./electron-builder.yml` - see <https://www.electron.build/> for more details (however the documentation is... spotty).

Currently this project uses [electron-builder](https://www.electron.build/), a move to [electron forge](https://www.electronforge.io/) is planned in the near future.
