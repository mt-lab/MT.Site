require 'yaml'

module Jekyll
  class YamlBlock < Liquid::Block

    def initialize(tag_name, markup, tokens)
      super
      @to = markup.strip
    end

    def render(context)
      output = super

      context[@to] = YAML.load(output)
      ''.freeze
    end
  end
end

Liquid::Template.register_tag("yaml", Jekyll::YamlBlock)
