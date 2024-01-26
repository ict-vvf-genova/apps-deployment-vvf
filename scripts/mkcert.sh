#!/usr/bin/env bash
#
# Create local authority, if absent, and certificates
# See: https://github.com/FiloSottile/mkcert

DOMAIN="ge.dipvvf.it"
CERTDIR="./config/certs"

# Check mkcert
if ! command -v mkcert &> /dev/null
then
    echo "mkcert not found, install it!"
    exit 1
fi

# Prepare certificate directory
mkdir -p $CERTDIR
cd $CERTDIR

# Create certificates
mkcert -key-file key.pem -cert-file cert.pem "*.$DOMAIN"
cp "$(mkcert -CAROOT)/rootCA.pem" .
echo "Done!"
echo "Use key.pem and cert.pem files as webserver tls certificates."
echo "Use rootCA.pem as certificate for browsers to trust this local CA."

# Warning: the rootCA-key.pem file that mkcert automatically generates gives complete # power to intercept secure requests from your machine. Do not share it.

