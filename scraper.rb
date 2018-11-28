require 'nokogiri'
require 'httparty'
require 'byebug'

def scraper
  url = "https://github.com/trending?since=weekly"
  unparsed_page = HTTParty.get(url)
  parsed_page = Nokogiri::HTML(unparsed_page)
  repository_array = []
  not_applicable = "NA"
  repositories = parsed_page.css('li.d-block')
  javascript_repositories = 0
  repositories_no_language_specified = []
  repositories.each do |repository_listing|
    name = repository_listing.css('span.text-normal').text.delete("/").strip
    title = repository_listing.css('a')[0].attributes["href"].value
    slashed_name = "/" + name + "/"
    title.slice! slashed_name
    repository = {
      name: title,
      description: repository_listing.css('p.d-inline-block').text.strip,
      user_name_of_primary_contributor: name.delete(' /'),
      primary_programming_language:
        if repository_listing.css('span')[1].children[3].children.text.strip == ""
          "NA"
        else
          repository_listing.css('span')[1].children[3].children.text.strip.downcase
        end
    }
    if repository_listing.css('span')[1].children[3].children.text.strip == ""
      repositories_no_language_specified << title
    end
    if repository_listing.css('span')[1].children[3].children.text.strip.downcase.include? "javascript"
      javascript_repositories += 1
    end
    repository_array << repository
    javascript_repositories
    repositories_no_language_specified
  end
end

scraper
