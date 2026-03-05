#!/bin/bash
# Poker Trainer Pro - GitHub部署脚本
# 保存为 deploy.sh 并运行

set -e

echo "🃏 Poker Trainer Pro - GitHub部署脚本"
echo "======================================"
echo ""

# 检查是否在正确的目录
if [ ! -f "index.html" ]; then
    echo "❌ 错误: 请在poker-trainer-web目录中运行此脚本"
    exit 1
fi

# GitHub用户名
echo -n "请输入你的GitHub用户名: "
read GITHUB_USER

if [ -z "$GITHUB_USER" ]; then
    echo "❌ 错误: GitHub用户名不能为空"
    exit 1
fi

# GitHub Token
echo ""
echo "需要GitHub Personal Access Token"
echo "获取方式: https://github.com/settings/tokens"
echo -n "请输入你的GitHub Token: "
read -s GITHUB_TOKEN
echo ""

if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ 错误: GitHub Token不能为空"
    exit 1
fi

REPO_NAME="poker-trainer"

echo ""
echo "📦 步骤1: 创建GitHub仓库..."

# 创建仓库
curl -s -X POST \
    -H "Authorization: token $GITHUB_TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    https://api.github.com/user/repos \
    -d "{\"name\":\"$REPO_NAME\",\"private\":false,\"auto_init\":false}" \
    > /tmp/repo_create.json

if grep -q '"id"' /tmp/repo_create.json; then
    echo "✅ 仓库创建成功!"
else
    echo "⚠️ 仓库可能已存在或创建失败，继续尝试推送..."
fi

echo ""
echo "📤 步骤2: 推送到GitHub..."

# 配置git
git remote remove origin 2>/dev/null || true
git remote add origin "https://$GITHUB_USER:$GITHUB_TOKEN@github.com/$GITHUB_USER/$REPO_NAME.git"

# 推送
git push -u origin main --force || git push -u origin master --force

echo ""
echo "🌐 步骤3: 启用GitHub Pages..."

# 启用GitHub Pages
curl -s -X POST \
    -H "Authorization: token $GITHUB_TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    https://api.github.com/repos/$GITHUB_USER/$REPO_NAME/pages \
    -d '{"source":{"branch":"main","path":"/"}}' \
    > /tmp/pages_enable.json 2>&1 || true

echo ""
echo "======================================"
echo "✅ 部署完成!"
echo ""
echo "📊 仓库地址:"
echo "   https://github.com/$GITHUB_USER/$REPO_NAME"
echo ""
echo "🌐 网站地址 (2-3分钟后生效):"
echo "   https://$GITHUB_USER.github.io/$REPO_NAME/"
echo ""
echo "⚙️  如果Pages未自动启用，请手动设置:"
echo "   1. 访问 https://github.com/$GITHUB_USER/$REPO_NAME/settings/pages"
echo "   2. Source选择 Deploy from a branch"
echo "   3. Branch选择 main → /(root)"
echo "   4. 点击 Save"
echo ""
echo "🎉 完成!"
