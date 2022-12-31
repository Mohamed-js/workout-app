require "test_helper"
require "generators/reactor/reactor_generator"

class ReactorGeneratorTest < Rails::Generators::TestCase
  tests ReactorGenerator
  destination Rails.root.join('tmp/generators')
  setup :prepare_destination

  # test "generator runs without errors" do
  #   assert_nothing_raised do
  #     run_generator ["arguments"]
  #   end
  # end
end
