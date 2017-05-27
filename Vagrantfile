
Vagrant.configure("2") do |config|

  config.vm.define :vafr do | vafr |

    vafr.vm.box = "UbuntuServer16.04-bento"
    vafr.vm.box_url = "file:////GENAP/VM_vanilla_images/opscode_ubuntu-16.04_chef-provisionerless.box"
#    vafr.vm.box_url = "https://opscode-vm-bento.s3.amazonaws.com/vagrant/virtualbox/opscode_ubuntu-16.04_chef-provisionerless.box"
    vafr.vm.network  :private_network, ip: "192.168.80.10"
    vafr.vm.host_name = "vafr"

    vafr.vm.provision :ansible do |ansible|
      ansible.inventory_path = "./ansible/host-vagrant-vafr"
      ansible.playbook = "./ansible/vafr-setup.yml"
      ansible.host_key_checking = false
      ansible.limit='all'
    end
  end

end

