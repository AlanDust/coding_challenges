require 'byebug'

# Implement an algorhithm to determine if a string has all unique characters.
# What if you canot use additional data structures?

def unique_characters(string)
  no_spaces = string.gsub!(/\s+/, '')
  array = no_spaces.split('').sort
  count = 0
  answer = true
  array.each do |letter|
    if letter == array[count + 1]
      answer = false
      return answer
    end
    count += 1
  end
  answer
end

# Implement a function reverse(char, str) in Ruby which reverses a null
# terminated string.

def reverse_null_terminated_string(string)
  remove_nil = string.chop
  reversed_string = remove_nil.reverse!
  return reversed_string
end

# Given two strings, write a method to decide if one is a permutation of the
# other.

def permutation_of_string(string_1, string_2)
  no_spaces_string_1 = string_1.gsub(/\s+/, '')
  no_spaces_string_2 = string_2.gsub(/\s+/, '')
  sort_1 = no_spaces_string_1.split('').sort
  sort_2 = no_spaces_string_2.split('').sort
  if sort_1 != sort_2
    false
  else
    true
  end
end

# Write a method to replace all spaces in a string with '%20'.  You may assume
# that the string has sufficient space at the end of the string to hold the
# additional characters, and that you are given the "true" length of the string.

def replace_spaces_in_string(string)
  string.sub(/ /, "%20")
end
