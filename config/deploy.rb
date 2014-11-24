# config valid only for Capistrano 3.1.
lock '3.2.1'

set :application, 'steelhacks'
set :deploy_to, '/u/sites/steelhacks'
set :keep_releases, 5

# Git
set :scm, :git
set :repo_url, 'git@github.com:Pitt-CSC/steelhacks.pittcsc.org.git'
set :branch, 'master'
