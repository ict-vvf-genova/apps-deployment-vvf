#!/usr/bin/env python

from passlib.hash import bcrypt
import getpass

p = bcrypt.using(rounds=12, ident="2y").hash(getpass.getpass())
print(f"Password hash: {p}")
