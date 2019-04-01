class User < ApplicationRecord
  belongs_to :ward

  def level
    if self.points > 0 && self.points <= 999
      1
    elsif self.points >= 1000 && self.points <= 1999
      2
    elsif self.points >= 2000 && self.points <= 2999
      3
    elsif self.points >= 3000 && self.points <= 3999
      4
    elsif self.points >= 4000 && self.points <= 4999
      5
    elsif self.points >= 5000 && self.points <= 5999
      6
    elsif self.points >= 6000 && self.points <= 6999
      7
    elsif self.points >= 7000 && self.points <= 7999
      8
    elsif self.points >= 8000 && self.points <= 8999
      9
    elsif self.points >= 9000 && self.points <= 9999
      10
    elsif self.points >= 10000 && self.points <= 10999
      11
    elsif self.points >= 11000 && self.points <= 11999
      12
    elsif self.points >= 12000 && self.points <= 12999
      13
    elsif self.points >= 13000 && self.points <= 13999
      14
    elsif self.points >= 14000 && self.points <= 14999
      15
    elsif self.points >= 15000 && self.points <= 15999
      16
    elsif self.points >= 16000 && self.points <= 16999
      17
    elsif self.points >= 17000 && self.points <= 17999
      18
    elsif self.points >= 18000 && self.points <= 18999
      19
    elsif self.points >= 19000 && self.points <= 19999
      20
    elsif self.points >= 20000 && self.points <= 20999
      21
    elsif self.points >= 21000 && self.points <= 21999
      22
    elsif self.points >= 22000 && self.points <= 22999
      23 
    elsif self.points >= 23000 && self.points <= 23999
      24
    elsif self.points >= 24000 && self.points <= 24999
      25
    elsif self.points >= 25000 && self.points <= 25999
      26
    elsif self.points >= 26000 && self.points <= 26999
      27
    elsif self.points >= 27000 && self.points <= 27999
      28
    elsif self.points >= 28000 && self.points <= 28999
      29
    elsif self.points >= 29000 && self.points <= 29999
      30
    elsif self.points >= 30000 && self.points <= 30999
      31
    elsif self.points >= 31000 && self.points <= 31999
      32
    elsif self.points >= 32000 && self.points <= 32999
      33
    elsif self.points >= 33000 && self.points <= 33999
      34
    elsif self.points >= 34000 && self.points <= 34999
      35
    elsif self.points >= 35000 && self.points <= 35999
      36
    elsif self.points >= 36000 && self.points <= 36999
      37
    elsif self.points >= 37000 && self.points <= 37999
      38
    elsif self.points >= 38000 && self.points <= 38999
      39
    elsif self.points >= 39000 && self.points <= 39999
      40
    elsif self.points >= 40000 && self.points <= 40999
      41
    elsif self.points >= 41000 && self.points <= 41999
      42
    elsif self.points >= 42000 && self.points <= 42999
      43
    elsif self.points >= 43000 && self.points <= 43999
      44
    elsif self.points >= 44000 && self.points <= 44999
      45
    elsif self.points >= 45000 && self.points <= 45999
      46
    elsif self.points >= 46000 && self.points <= 46999
      47
    elsif self.points >= 47000 && self.points <= 47999
      48 
    elsif self.points >= 48000 && self.points <= 48999
      49
    elsif self.points >= 49000 && self.points <= 49999
      50
    elsif self.points >= 50000 && self.points <= 50999
      51
    elsif self.points >= 51000 && self.points <= 51999
      52
    elsif self.points >= 52000 && self.points <= 52999
      53
    elsif self.points >= 53000 && self.points <= 53999
      54
    elsif self.points >= 54000 && self.points <= 54999
      55
    elsif self.points >= 55000 && self.points <= 55999
      56
    elsif self.points >= 56000 && self.points <= 56999
      57
    elsif self.points >= 57000 && self.points <= 57999
      58
    elsif self.points >= 58000 && self.points <= 58999
      59
    elsif self.points >= 59000 && self.points <= 59999
      60
    elsif self.points >= 60000 && self.points <= 60999
      61
    elsif self.points >= 61000 && self.points <= 61999
      62
    elsif self.points >= 62000 && self.points <= 62999
      63
    elsif self.points >= 63000 && self.points <= 63999
      64
    elsif self.points >= 64000 && self.points <= 64999
      65
    elsif self.points >= 65000 && self.points <= 65999
      66
    elsif self.points >= 66000 && self.points <= 66999
      67
    elsif self.points >= 67000 && self.points <= 67000
      68
    elsif self.points >= 68000 && self.points <= 68999
      69
    elsif self.points >= 69000 && self.points <= 69999
      70
    elsif self.points >= 70000 && self.points <= 70999
      71
    elsif self.points >= 71000 && self.points <= 71999
      72
    elsif self.points >= 72000 && self.points <= 72999
      73
    elsif self.points >= 73000 && self.points <= 73999
      74
    elsif self.points >= 74000 && self.points <= 74999
      75
    elsif self.points >= 75000 && self.points <= 75999
      76
    elsif self.points >= 76000 && self.points <= 76999
      77
    elsif self.points >= 77000 && self.points <= 77999
      78
    elsif self.points >= 78000 && self.points <= 78999
      79
    elsif self.points >= 79000 && self.points <= 79999
      80
    elsif self.points >= 80000 && self.points <= 80999
      81
    elsif self.points >= 81000 && self.points <= 81999
      82
    elsif self.points >= 82000 && self.points <= 82999
      83
    elsif self.points >= 83000 && self.points <= 83999
      84
    elsif self.points >= 84000 && self.points <= 84999
      85
    elsif self.points >= 85000 && self.points <= 85999
      86
    elsif self.points >= 86000 && self.points <= 86999
      87
    elsif self.points >= 87000 && self.points <= 87999
      88
    elsif self.points >= 88000 && self.points <= 88999
      89
    elsif self.points >= 89000 && self.points <= 89999
      90
    elsif self.points >= 90000 && self.points <= 90999
      91
    elsif self.points >= 91000 && self.points <= 91999
      92
    elsif self.points >= 92000 && self.points <= 92999
      93
    elsif self.points >= 93000 && self.points <= 93999
      94
    elsif self.points >= 94000 && self.points <= 94999
      95
    elsif self.points >= 95000 && self.points <= 95999
      96
    elsif self.points >= 96000 && self.points <= 96999
      97
    elsif self.points >= 97000 && self.points <= 97999
      98
    elsif self.points >= 98000 && self.points <= 98999
      99
    else 
      100
    end
  end

  def badge
    if self.level >= 1 && self.level <=9
      'Seedling'
    elsif self.level >= 10 && self.level <= 24
      'Sapling'
    elsif self.level >= 25 && self.level <= 49
      'Tree'
    elsif self.level >= 50 && self.level <= 89
      'Wise Tree'
    else 
      'Ancient Tree'
    end
  end

  def award
    if self.level <= 9 
      'N/A'
    elsif self.level >= 10 && self.level <= 24
      '10% Off Transit Pass'
    elsif self.level >= 25 && self.level <= 49
      '$5 Off $50 or more at Co-Op'
    elsif self.level >= 50 && self.level <= 99
      '20% Off Transit Pas'
    else 
      '$250 Tax Credit'
    end
  end

end