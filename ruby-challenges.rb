# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN 

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

if (num1 % 2 == 0)
  p "#{num1} is even"
else 
  p "#{num1} is odd"
end

if (num2 % 2 == 0)
  p "#{num2} is even"
else 
  p "#{num2} is odd"
end

if (num3 % 2 == 0)
  p "#{num3} is even"
else 
  p "#{num3} is odd"
end

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowels (string)
  string_array = string.split('')
  string_array.delete('a','e','i','o','u')
  string_array.join('')
end
p no_vowels

# I know I'm missing something that connects the beatles albumns to my code... I don't know what.. 

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


def valid_palindrome string
  if string == string.reverse
      true
  else 
      false
  end
end
p palindrome_tester1
p palindrome_tester2
p palindrome_tester3