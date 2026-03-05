#!/bin/bash
# Poker Trainer Pro - 本地启动脚本

echo "🃏 Poker Trainer Pro - 本地服务器"
echo "================================"
echo ""

# 检查Python
if command -v python3 &> /dev/null; then
    echo "✅ 使用 Python 3 启动服务器..."
    echo "🌐 访问地址: http://localhost:8080"
    echo ""
    python3 -m http.server 8080
elif command -v python &> /dev/null; then
    echo "✅ 使用 Python 启动服务器..."
    echo "🌐 访问地址: http://localhost:8080"
    echo ""
    python -m http.server 8080
# 检查Node.js
elif command -v npx &> /dev/null; then
    echo "✅ 使用 Node.js 启动服务器..."
    echo "🌐 访问地址: http://localhost:3000"
    echo ""
    npx serve .
# 检查PHP
elif command -v php &> /dev/null; then
    echo "✅ 使用 PHP 启动服务器..."
    echo "🌐 访问地址: http://localhost:8080"
    echo ""
    php -S localhost:8080
else
    echo "❌ 没有找到可用的服务器工具"
    echo ""
    echo "请安装以下工具之一:"
    echo "  - Python 3: https://www.python.org/"
    echo "  - Node.js: https://nodejs.org/"
    echo "  - PHP: https://www.php.net/"
    echo ""
    exit 1
fi
