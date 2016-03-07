#!/bin/bash
cp LOG.txt ip-addresses-copy.txt && vi -c "g/==*/d" -c "g/^\d.*\s/normal f/d$" -c "wq" ip-addresses-copy.txt && sort ip-addresses-copy.txt >> temp.txt && uniq -c temp.txt >> count.txt && sort -n -r count.txt >> countTemp.txt && sed '11,$ d' countTemp.txt >> top10-ip-requests.txt && rm countTemp.txt count.txt temp.txt ip-addresses-copy.txt && vi top10-ip-requests.txt
