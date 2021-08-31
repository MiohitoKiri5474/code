---
title: '個人環境建置：iTerm 2 + zsh + neoVim + tmux'
date: 2020-09-09 19:57:40
tags:
 - terminal
 - zsh
 - neoVim
 - tmux
---

## 前言

最近開始重寫自己的一些 config，像是 vim 是 多年前跟學長 clone 過來的，zsh 是網路上模板亂抓，tmux 也是找 .tmux.conf.local 下來用
因為總是會戳到不明錯誤，總是會造成不少麻煩，加上最近想要漸漸脫離 Sublime Text，所以在經過幾天的 vimrc 改造後決定要寫篇文章紀錄一下

## Before We Start

首先應該要有以下先備知識
 - Command Line 使用經驗
 - homebrew 安裝

有以下經驗更佳
 - vim 操作方法

<!--more-->

在開始之前先放幾張現在我的作業環境的圖
![](itermScreenShot1.png)
![](itermScreenShot2.png)

## iTerm 2 + zsh

### iTerm 2

因為接下來的工作環境都要在 Command line 下面完成，macOS 預設的 terminal app 設定修改麻煩，介面也沒有 iTerm 2 好看，所以我都會用 iTerm 2

安裝很簡單，丟一行指令就好了
```shell=zsh
brew cask install iterm
```
> 或是上 [iTerm2](https://iterm2.com/) 的官網下載

至於 iTerm 2 能設定的東西真的很多，甚至還能把顏色設定導出分享給別人
目前我是用這一組配色：[Dracula](https://draculatheme.com)，除了 iTerm 以外還有許多軟體都能是用這一套配色
會選用 Dracula 的原因是顏色夠醒目（寫 code 有 highlight 是重點），但是顏色又不至於刺眼

iTerm 安裝完後，記得到 `Preferences > Profiles > Terminal > Report Terminal Type` 那邊設定 `xterm-256color`，才能看到精美的顏色

### zsh

iTerm 安裝好了，那麼接下來就是安裝 zsh 的時候了
安裝的過程也算簡單，也是一行指令
由於在接下來的設定中也會大量的用到 git，所以也順便把 git 給裝了

```shell=zsh
brew install zsh git
```

接著裝一下 Powerline Font，不裝的話有些 icon 會不支援，變成問號
![](nani.png)
我自己是選用 `Sauce Code Pro Nerd Font`
安裝完後可以到 `Preferences > Profiles > Text > Change Font` 的地方做修改字體

接著執行以下兩行指令來將 zsh 設定成預設的 shell

```shell=zsh
sudo sh -c "echo $(which zsh) >> /etc/shells" 
chsh -s $(which zsh)
```

#### oh-my-zsh

因為原始的 zsh 設定相當麻煩，有人寫了一份 framework 用來幫助方便的設定 zsh，正是 [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh)

```shell=zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

剛裝完 oh-my-zsh 後會發現 zsh 的畫面變了，這些是內建的 theme，如果喜歡內建的就可以跳過下面安裝 `powerlevel10k` 的步驟

#### powerlevel10k

本來是使用前一代 `powerlevel9k`，不過這幾天才得知有更新，並且有經過優化，所以換成了 `powerlevel10k`，用起來的感覺相當好用，比前一代看起來舒服許多，少了光污染
`powerlevel10k` github link: https://github.com/romkatv/powerlevel10k

先把資料 clone 進 `.oh-my-zsh/` 存放 theme 的地方

```shell=zsh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

在 .zshrc 中修改一下使用的 theme

```shell=zsh
ZSH_THEME=”agnoster” # 原先的設定
ZSH_THEME="powerlevel10k/powerlevel10k" # 修改成 powerlevel10k
```

接著執行

```shell=zsh
exec $SHELL # 在修改完 .zshrc 後都要跑一次這個指令才能看到效果
p10k configure
```

跟著設定就可以完成 `powerlevel10k` 的設定了

然後在 `.zshrc` 中可以進一步的修改要顯示在左右狀態列的細項，在 github 中有[所有的選項](https://github.com/romkatv/powerlevel10k#batteries-included)

```shell=zsh
POWERLEVEL10K_LEFT_PROMPT_ELEMENTS=(os_icon dir dir_writable virtualenv vcs)
POWERLEVEL10K_RIGHT_PROMPT_ELEMENTS=(status)
```

這是我的設定選項，效果如下
![](powerlevel10k-mio.png)

####   zsh-syntax-highlighting

這是一個 zsh 的 plugin，用來顯示目前的指令或檔案是否為合法的（是否存在）
詳細安裝方法以及效果不贅述，在 [github](https://github.com/zsh-users/zsh-syntax-highlighting) 上的 repo 有寫的很清楚

## neoVim

### neoVim vs vim

neoVim，簡稱 nvim，是從 vim 7 的某個版本 fork 出來的，主要是因為以下的差別

1. Async 實現：在當時 vim 沒辦法同時處理多項作業，所以當 plugin 裝太多時容易卡死
2. Python 的支援：以往在 vim 上使用需要 Python 的 plugin 都要編譯過一次，而且每次 Python 更新後都要重新編譯
    而 nvim 只需要跑過 `pip install neovim` 後就可以得到 Python 的支援，可說是非常方便
3. 內嵌的 Terminal：由於 Async 的實現，現在可以在 nvim 裡面開一個視窗來使用 terminal，就不用再以 tmux 來做到相同的效果了
    不過個人還是習慣用 tmux
4. 預設的設定：vim 在安裝完成後有許多功能預設是關閉的，有些功能是 10 個人裡面有 11 個人想要開起來（例如語法高亮），等於變向提高 vim 入門難度；但是 nvim 有許多功能是預先打開的，對於真・新手來說應該會輕鬆很多
5. 擴充性的提高：雖然 vim 的擴充性就夠高了，不過 nvim 卻是將擴充性提高到另外一個境界（例如用 Visual Studio Code 當作 gui，把 nvim 放在後端當核心用）

所以我選擇使用 nvim 而不是 vim

安裝很簡單，不過因為要使用的 plugin 需要用到 nightly （預覽）版本
可以從[官方 github](https://github.com/neovim/neovim/releases/tag/nightly) 下載安裝檔，或是用以下指令

```shell=
brew install --HEAD neovim
```

等等也有些套件要用到 `python`，所以也安裝一下

```shell=
brew install python3
```

安裝完 python 後，安裝 [`pynvim`](https://github.com/neovim/pynvim)，pynvim 是一個 python 的 client，讓 nvim 中的 plugin 可以吃到 python 的資源

```shell=
pip3 install pynvim
```

接著就是設定 nvim 了

### Plugin Manager

在開始安裝套件之前，先安裝一下 plugin manager，不然手動管理 plugin 真是一件麻煩事
通常都是選以下幾個

1. Pathogen
    使用起來出乎意料的簡單，只要把 plugin 的資料夾放在 `bundle/` 底下就好了，不過缺點就是要手動放進去
2. Vundle
    新增套件的方式是在 `.vimrc` 中新增要安裝的 plugin name
    然後在 vim 中敲 `:PluginInstall` 就好，開啟 vim 的時候自動載入 plugin
3. vim-plug
    目前正在用的 manager，感覺上是 Vundle 的加強版
    同樣可以在 `.vimrc` 中新增名稱，然後在 vim 中敲 `:PlugInstall` 完成安裝
    跟 Vundle 的差別是 vim-plug 有 on-demand loading，可以在需要用這個 plugin 的時候才啟動他
    像是 vim-go 這種寫 Golang 才需要用到的套件，就可以在開啟檔案為 `.go` 的時候再載入
    對於套件多的時候可以大幅度提升 vim 開啟速度（雖然我現在用不到 20 個 plug in 就是了）

詳細安裝方法以及說明如 vim-plug 在 github 上的 [reop](https://github.com/junegunn/vim-plug)

```shell=
sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
       https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
```

往常設定檔是放在 `.vimrc` 裡面，plugin 等額外檔案則是 `.vim`
不過 nvim 是放在 `~/.config/nvim/init.vim` 中，這樣如果有其他放在 `~/.config` 的設定，可以直接備份整個資料夾就好

> 不過也可以讓 `init.vim` 使用 `.vimrc` 來當作設定檔，詳細可以看[這篇](https://blog.m157q.tw/posts/2018/07/23/use-my-old-vimrc-for-neovim/)

前置作業做完了，開始設定 nvim 吧

### Plugin List

 - [junejunn/vim-plug](https://github.com/junegunn/vim-plug)
 	剛剛提到的 plugin manager
 - [vim-airline/vim-airline](https://github.com/vim-airline/vim-airline)
 - [vim-airline/vim-airline-themes](https://github.com/vim-airline/vim-airline-themes)
 	讓 nvim 能夠有好看的介面，可以好好用
 - [junegunn/fzf](https://github.com/junegunn/fzf)
 - [junegunn/fzf.vim](https://github.com/junegunn/fzf.vim)
 	fzf 是一個強大的模糊搜索工具，可以透過 `fzf.vim` 讓 nvim 也能使用 fzf
 - [vim-scropts/taglist.vim](https://github.com/vim-scripts/taglist.vim)
 - [preservim/tagbar](https://github.com/preservim/tagbar)
 - [motemem/git-vim](https://github.com/motemen/git-vim)
 - [airblade/vim-gitgutter](https://github.com/airblade/vim-gitgutter)
 - [neovim/nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)
 - [nvim-lua/completion-nvim](https://github.com/nvim-lua/completion-nvim)
 - [nvim-lua/lsp-status.nvim](https://github.com/nvim-lua/lsp-status.nvim)
 - [Shouge/defx.nvim](https://github.com/Shougo/defx.nvim)
 - [fatih/vim-go](https://github.com/fatih/vim-go)
 - [junegunn/goyo.vim](https://github.com/junegunn/goyo.vim)
 - [dracula/vim](https://github.com/dracula/vim)
 - [frazrepo/vim-rainbow](https://github.com/frazrepo/vim-rainbow)