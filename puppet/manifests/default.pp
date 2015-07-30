class { 'ohmyzsh': }
ohmyzsh::install { ['root', 'vagrant']: }

include '::mongodb::server'

exec { 'meteor_install':
  command => 'curl "https://install.meteor.com/" | sh'
}
