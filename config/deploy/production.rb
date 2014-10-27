server 'web-01', roles: %w{web}, user: 'hackpitt'

set :ssh_options,
  proxy: Net::SSH::Proxy::Command.new('ssh gateway.do-nyc3.pittcsc.org -q -W %h:%p'),
  forward_agent: true
