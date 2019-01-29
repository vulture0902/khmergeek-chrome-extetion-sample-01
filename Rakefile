require 'rubygems'
require 'crxmake'
require 'json'

desc 'make chrome extension'
task 'crxmake' do

version_str = ''
file_path = './src/manifest.json'
File.open(file_path) do |file|
  hash = JSON.load(file)
  version_str = hash['version'].gsub!(/\./, '_')
end

file_name = 'app_v' + version_str
  # create crx app
  CrxMake.make(
               :ex_dir => "./src",
               :crx_output => "./package/#{file_name}.crx",
               :verbose => true,
               :ignorefile => /\.swp/,
               :ignoredir => /\.(?:svn|git|cvs)/
               )

  # create zip app
  CrxMake.zip(
              :ex_dir => "./src",
              :zip_output => "./package/#{file_name}.zip",
              :verbose => true,
              :ignorefile => /\.swp/,
              :ignoredir => /\.(?:svn|git|cvs)/
              )
end

task :default => [:crxmake]
