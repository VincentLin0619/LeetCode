# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
  hash = Hash.new(0)
  return false if s.length != t.length
  return true if s == '' && t == ''

  s.each_char do |svar|
    hash[svar] += 1
    # p hash
  end

  t.each_char do |tvar|
    if hash[tvar]
      hash[tvar] -= 1
      # p hash
    else
      # p false
      return false
    end
  end

  # p hash.all? { |k, v| v == 0 }
  return hash.all? { |k, v| v == 0 }

end

s = "anagram"
t = "nagaram"
# s = ''
# t = ''

is_anagram(s, t)
