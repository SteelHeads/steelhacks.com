# config valid only for Capistrano 3.1.
lock '3.2.1'

set :application, 'hackpitt'
set :deploy_to, '/u/sites/hackpitt'
set :keep_releases, 5
set :tmp_dir, '/u/sites/hackpitt/tmp'

# Git
set :scm, :git
set :repo_url, 'git@github.com:Pitt-CSC/hackpitt.pittcsc.org.git'
set :branch, 'master'
