import os
from jinja2 import Environment, FileSystemLoader


# load arguments of the python script
import argparse
parser = argparse.ArgumentParser()
parser.add_argument("--ba-user", help="Basic Auth Username")
parser.add_argument("--ba-pw-hashed", help="Hashed Basic Auth Password")
parser.add_argument("--domainname", help="Domainname")

args = parser.parse_args()
ba_user = args.ba_user
ba_pw_hashed = args.ba_pw_hashed
domainname = args.domainname


# Create Jinja template environment
env = Environment(loader=FileSystemLoader("."))
template = env.get_template("Caddyfile.j2")

# Render the template with the environment variables
rendered_template = template.render(ba_user=ba_user, ba_pw_hashed=ba_pw_hashed, domainname=domainname)

# Write the rendered template to the actual Caddyfile
with open("Caddyfile", "w+") as f:
    f.write(rendered_template)

