# Sử dụng Bun image chính thức
FROM oven/bun:1.1.8-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và bun.lockb trước để tối ưu cache
COPY package.json bun.lockb ./

# Cài đặt dependencies
RUN bun install --production

# Sao chép toàn bộ mã nguồn
COPY . .

# Mở cổng backend
EXPOSE 3000

# Chạy backend
CMD ["bun", "run", "start"]
