Calculus
========

Serverless cloud computing using AWS Lambda Functions.

Written in [Typescript][typescript].
Built with [Webpack][webpack].
Deployed with [Apex][apex].

[typescript]: https://github.com/microsoft/typescript
[webpack]: https://github.com/webpack/webpack
[apex]: https://github.com/apex/apex


## Local setup

```sh
# Install go-lang and node.js
brew install go node

# Set your GOPATH (if you haven't already)
echo 'export GOPATH=$HOME/.go' >> ~/.bashrc
echo 'export PATH=$PATH:$GOPATH/bin' >> ~/.bashrc
source ~/.bashrc

# Install Apex
go get github.com/apex/apex/cmd/apex

# Install the Node deps
npm install -g webpack
npm install
```


## Usage

```sh
# Run the compiler
webpack --watch

# Run the tests
# TODO
```
