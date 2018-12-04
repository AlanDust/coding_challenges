require 'byebug'

# 2.1
# Write code to remove duplicates from an unsorted list.
# (assuming numbers)

def remove_duplicates(array)
  no_duplicates = []
  counter = 0
  array.each do |number|
    if !no_duplicates.include?(number)
      no_duplicates << number
    end
  end
  return no_duplicates
end
