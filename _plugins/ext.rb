module Jekyll
  module Tags
    class ImageEncodeTag < Liquid::Tag          
      def initialize(tag_name, url, options)
        @url = url.strip
        super
      end

      def render(context)
        encode
      end
      
      def encode
        require 'open-uri'
        require 'base64'
        Base64.strict_encode64(File.binread(@url))
      end
    end
  end
end

Liquid::Template.register_tag('base64', Jekyll::Tags::ImageEncodeTag)
