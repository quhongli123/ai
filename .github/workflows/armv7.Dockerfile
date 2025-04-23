FROM --platform=linux/arm/v7 ubuntu:22.04

# 安装依赖
RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    libssl-dev \
    libgtk-3-dev \
    libwebkit2gtk-4.1-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev \
    patchelf \
    libfuse2 \
    file \
    pkg-config \
    git \
    jq \
    ca-certificates \
    wget

# 安装 Rust
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"

# 安装 Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

# 安装 pnpm
RUN npm install -g pnpm@8

# 设置工作目录
WORKDIR /app
COPY . .

# 安装项目依赖
RUN pnpm install

# 使用预设置的环境变量禁用更新检查和其他可能导致问题的选项
ENV TAURI_SKIP_UPDATE_CHECK=true
ENV CARGO_REGISTRIES_CRATES_IO_PROTOCOL=sparse 
ENV HOME=/root

# 增加 swap 空间以防止内存不足
RUN fallocate -l 4G /swapfile && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile

# 构建应用
RUN pnpm run build
RUN cd src-tauri && cargo build --release

# 单独执行打包步骤
RUN cd src-tauri && cargo tauri build

# 保持容器运行以便提取文件
CMD ["sleep", "infinity"] 