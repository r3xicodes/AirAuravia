import discord
from discord.ext import commands

bot = commands.Bot(command_prefix="!")

@bot.event
async def on_ready():
    print(f"✅ Bot is online as {bot.user}")

@bot.command()
async def ping(ctx):
    await ctx.send("Pong!")

bot.run("YOUR_DISCORD_BOT_TOKEN")
