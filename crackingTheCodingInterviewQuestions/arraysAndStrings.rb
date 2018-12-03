require 'byebug'

# 1.1
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

# 1.2
# Implement a function reverse(char, str) in Ruby which reverses a null
# terminated string.

def reverse_null_terminated_string(string)
  remove_nil = string.chop
  reversed_string = remove_nil.reverse!
  return reversed_string
end

# 1.3
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

# 1.4
# Write a method to replace all spaces in a string with '%20'.  You may assume
# that the string has sufficient space at the end of the string to hold the
# additional characters, and that you are given the "true" length of the string.

def replace_spaces_in_string(string)
  string.sub(/ /, "%20")
end

# 1.5
# Implement a method to perform basic string compression using the counts of
# repeated characters.  For example, the string aabcccccaaa would become a2b1c5a3.
# If the compressed string would not become smaller than the original string,
# your method should return the original string.

def string_compression(string)
  no_spaces = string.gsub(/\s+/, '')
  array = no_spaces.split('')
  counter = 1
  new_array = []
  letter_counter = 1
  array.each do |letter|
    if letter == array[counter]
      letter_counter += 1
    else
      new_array << letter
      new_array << letter_counter
      letter_counter = 1
    end
    counter += 1
  end
  compressed_string = new_array.join('')
  return compressed_string
end

# 1.6
# Given an image represented by an NxN matrix, where each pixel in the image
# is 4 bytes, write a method to rotate the image by 90 degrees.
# Can you do this in place?
