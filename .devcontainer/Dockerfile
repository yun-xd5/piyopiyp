FROM node:22

# 基本的な開発ツールをインストール
RUN apt update && apt install -y less man-db sudo

# デフォルトの `node` ユーザーに `sudo` 権限を付与
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# 開発コンテナであることを示す環境変数を設定
ENV DEVCONTAINER=true
