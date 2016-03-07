from lib.primes import kPrimes
import time

def eratSieve(num):
  sieve = [0, 0, 1, 1]

  result = []
  for i in range(4, num + 1):
    sieve.append(1)

  for i in range(len(sieve)): 
    if(sieve[i]):
      for j in range(i*i, num, i):
        sieve[j] = 0;

  for l in range(0, (len(sieve) - 1)):
    temp = sieve[l]
    if(sieve[l] == 1):
      result.append(l)

  return result



numPrimes = len(kPrimes)
last = (numPrimes - 1) 
limit = kPrimes[last]
start = time.time()
eratResult = eratSieve(limit)
end = time.time()
eratTime = (end - start)

def test(l):
  for i in range(len(l)):
    if(l[i] != kPrimes[i]):
      return 'false'
  return 'true'

print('Test Passed:', test(eratResult), 'and function executed in', eratTime, 'seconds', 'producing', len(eratResult), 'primes up to', limit)
      
