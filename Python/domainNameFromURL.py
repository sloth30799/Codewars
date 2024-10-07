# Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

# * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
# * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
# * url = "https://www.cnet.com"                -> domain name = cnet"

def domain_name(url):
    parsedURL = url.replace('http://', '').replace('https://',
                                                   '').replace('www.', '').split('.')

    return parsedURL[0]


example = "http://github.com/carbonfive/raygun"
domain_name(example)

example2 = "http://www.zombie-bites.com"
domain_name(example2)
