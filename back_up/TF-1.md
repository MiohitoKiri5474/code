---
title: 'TensorFlow 學習筆記 Part-1'
date: 2019-05-26 23:16:30
tags:
 - TensorFlow
 - Python
 - YTP
---

##  前言

因為進了 ytp 的 2!（耶），所以最近想說來讀一下 TensorFlow

至於 1! 的內容有空再寫吧（喂

於是在2019年的五月26號晚上10點30分，MiohitoKiri5474打開了TensorFlow的教學文，開始學起TensorFlow了

<!--more-->

## 前置作業

子曰：工欲善其事，必先利其器。所以在學習前總先把一些環境處理好

我先簡單講一下我現在的環境

+ macOS Mojave 10.14.4
+ Python 3.7.3 ( Clang 10.0.1 )
+ TensorFlow 1.13.1

這邊我所有的環境都是用目前最新的（除了macOS，最近沒有很多時間可以讓他慢慢更新，所以就先放著

### 安裝過程

```shell
pip install --ignore-installed --upgrade tensorflow
#如果有裝複數版本的python（如python2 & python 3），請分別打上pip2 以及pip3
```

詳細過程安裝說明我放[這邊](https://www.tensorflow.org/install/)

稍微等一下應該就好了

這邊我先打一個簡單的範例程式

也就是說，所有語言（？）的第一個範例：Hello, World !

```python
import tensorflow as tf # tensorflow 太長了啦 > <

# constant可視為是TensorFlow專用的變數型態
# 更多的會在這篇文章的下面慢慢提到
A.constant ( 'Hello, World!' )

# 用with可以讓Session自動關閉
with tf.Session() as sess:
	# 在TensorFlow裡面，要run過才算是真的被執行
	B = sess.run ( a )
	print ( B )
```



這個程式執行後，應該會出現類似的結果

![](HelloWorld.png)

上面那行是TensorFlow提醒你加速之類的東西，並不影響執行結果，可以用下面的程式碼關掉

```python
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
```

太棒了，這樣就可以繼續了呢

## TensorFlow 簡介

網路上隨便google都介紹很多，所以我這邊只講重點

1.  Google開發的Deep Learning套件
2.  是一個採用資料流程圖，用於數值計算的開源套件

對於有打過演算法競賽的，應該會對下面這種圖不陌生

![](tensors_flowing.gif)

沒錯，TensorFlow就是可以非同步計算並行的運算

從名詞可以很直觀的解釋成：從張量中流過

1.  節點（Nodes）：在流程圖中的操作，有可能只是輸入、輸出，或是數學運算

2.  張量（Edges）：表示各節點之中的關係，也就是張量（有向邊）

## tensorflow.constant

這代表給常數，也就是說賦值後即無法被修改

與C++的修飾字const有類似的功能

```python
import tensorflow as tf

A.constant ( 10, dtype = tf.int64 )

print ( A )
```

嗯，這樣理論上應該要出現的是A的值吧

並沒有

![](nope.jpg)

因為A只是在TensorFlow中的一個節點而已，而10只是這個節點上的一個變數（？

所以要開Session run過才能輸出A的值

```python
import tensorflow as tf

A = tf.constant ( 10, dtype = tf.int64 )

print ( tf.Session().run ( A ) )
```

## tensorflow.Variable

這代表變數，也就是說，是可修改的

在C++中，即是沒有加上const的變數

像是我們可以讓A輸出0~4

```python
import tensorflow as tf

A = tf.Variable ( 0, dtype = tf.int64 )

with tf.Session() as sess:
    # 變數需要初始化
    sess.run ( tf.global_variables_initializer() )

    # 使用 assign 修改變數
    for i in range ( 5 ):
        print ( sess.run ( A.assign ( i ) ) )
```

就如同前面提到的一樣，沒有開Session run過都不算有執行到

所以如果這樣寫

```python
for i in range ( 5 ):
  A.assign ( i )
  print ( sess.run ( A ) )
```

只會不斷的輸出0而已

## tensorflow.placeholder

呃這東西該怎麼解釋

有點像是會Flush掉的變數？！

在使用後這種形態的變數會被清掉，所以前一次的操作無法儲存再利用

我們先用上面提到的範例，輸出0~4吧

```python
import tensorflow as tf

A = tf.placeholder ( dtype = tf.int64 )

with tf.Session() as sess:
  for i in range ( 5 ):
    print ( sess.run ( A, feed_dict = { A: i } ) )
```

這樣就可以輸出0~4了

比較特別的是，要用feed_dict來賦值，利用這項功能，我們可以在訓練模型的時候更方便、靈活的輸入資料

這裡來看看另外一種情況

```python
import tensorflow as tf

A = tf.placeholder ( dtype = tf.int64 )
B = tf.placeholder ( dtype = tf.int64 )
C = tf.placeholder ( dtype = tf.int64 )

D = A + B
E = ( A + B ) * C

with tf.Session() as sess:
    # 可以一次全部傳入所有的資料
    result = sess.run ( D, feed_dict = { A: 10, B: 20, C: 30 } )
    print ( result )

    # 也可以只傳入需要用到的部分
    result = sess.run ( D, feed_dict = { A: 10, B: 20 } )
    print ( result )

    # 這樣會報錯，因為要計算所使用的位置為空
    result = sess.run ( E, feed_dict = { A: 10, B: 20 } )
    print ( result )
```

## TensorBoard

這東西可厲害了

可以幫你把抽象的TensorFlow模型圖像化！

就像是上面那張gif

步驟如下：

1.  把要包起來的部分用tensorflow.name_scope ( 'name' ) 包起來
2.  在最後用tensorflow.summery.FileWriter輸出到目標資料夾

先上範例

```python
import tensorflow as tf

# 如果沒有命名（或撞名），則會自動分配名稱
A = tf.constant ( 10, name = 'A_const' )
B = tf.constant ( 20 name = 'B_const' )

with tf.Session() as sess:
    # 把要畫出來的部分用Run包起來
    with tf.name_scope ( 'Run' ):
        result = sess.run ( A + B )
    print ( result )

    train_writer = tf.summary.FileWriter ( '/Users/miohitokiri5474/tf_test', sess.graph )
    train_writer.close()
```

這樣就可以把圖畫出來了

tf.summary.FileWeiter有兩樣參數，一樣是路徑，這邊我是放在我的home裡的一個目錄

回到那個資料夾（tf_test），會看到一個檔案

events.out.tfevents.(一串數字).(主機名稱)

像是我的檔案是長這樣

![](TensorBoard-file.png)

接著開一個Shell，輸入指令：

```shell
tensorboard --logdir=/home/shayne/tfboard_Test
```

然後再開瀏覽器，輸入localhost:6006

這樣就可以看到TensorBoard的畫面了

![](TensorBoard-screenshot.png)

在Run上雙擊就可以看到這個Node裡的資料

![](TensorBoard-Run.png)

現在我們換稍微複雜一點的程式

```python
import tensorflow as tf

A = tf.constant ( 10, name = 'A_const' )
B = tf.constant ( 20, name = 'B_const' )

with tf.name_scope ( 'Add' ):
    C = A + B

with tf.Session() as sess:
    with tf.name_scope ( 'Run' ):
        D = sess.run ( C * 3 )
    print ( D )

    train_writer = tf.summary.FileWriter ( '/Users/miohitokiri5474/tf_test', sess.graph )
    train_writer.close()
```

先計算$A+B$後再乘三

也就是$(A+B)\times 3$

這樣圖會是這樣

![](TensorBoard-Add-Run.png)

## 結語

今天就先到這裡（我打這篇文章打好久

TensorBoard沒辦法講完有點遺憾，所以我把連結放在[這裡](https://www.tensorflow.org/get_started/summaries_and_tensorboard)

下一篇來聊聊張量、流，還有如何把檔案轉換成可以讓TensorFlow可讀取的格式

應該會隔兩天才會出來吧（？

希、希望真的可以隔兩天準時出貨，別怠惰了

![](ww.jpg)

.

話說最近買了顆24寸的2K螢幕

（也不算最近啦，反正就是這一個月的事

半年前才在說朋友買2K螢幕很浪費錢，FHD的就很棒了

半年後，真、真香

![](www.jpg)

大概講一下使用心得，我覺得大螢幕真的有差，用起來的感覺就是不同

不會像以前用20寸的老螢幕覺得很不舒服（字會糊掉

而且因為更大，所以我可以同時顯示出更多東西

例如打這篇文章的時候，我可以一邊開瀏覽器看資料，一邊開Typora來寫這篇文章，以及開iTerm2確認文章中的code有沒有打錯

還挺實用的，而且還遇到跳水大拍賣，大概打六折左右，還多送一年保固

改天有空再來寫寫我現在書桌的環境好了，我個人認真覺得好的環境真的可以提升工作效率（？

那麼今天就先這樣，大家下回見