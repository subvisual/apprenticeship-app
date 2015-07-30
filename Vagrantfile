Vagrant::Config.run do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.forward_port 3000, 3000

  config.ssh.shell = "bash -c 'BASH_ENV=/etc/profile exec bash'"

  config.vm.provision :puppet,
    :manifests_path => 'puppet/manifests',
    :module_path => 'puppet/modules'
end
