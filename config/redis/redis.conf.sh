#!/bin/sh

exec cat - <<-EOF
	bind 0.0.0.0
	loglevel ${REDIS_LOGLEVEL:?}
	save 60 1
	appendonly yes
	appendfsync everysec
	auto-aof-rewrite-min-size 16mb
	auto-aof-rewrite-percentage 100
	dir /data/
	user default on ~* &* +@all -@admin >${REDIS_AUTH:?}
EOF
