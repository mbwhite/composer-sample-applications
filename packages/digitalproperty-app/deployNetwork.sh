#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# show commands and fail on first error
set -ev

composer archive create --sourceName digitalproperty-network --sourceType module --archiveFile digitalPropertyNetwork.bna 
composer network deploy --archiveFile "${DIR}"/digitalPropertyNetwork.bna --card PeerAdmin@hlfv1 -A admin -S 
composer card import --file ./admin@digitalproperty-network.card 
composer network list --card admin@digitalproperty-network