import discord
from discord.ext import commands
from discord.utils import get

TOKEN = '...'

//Deaglan 29.6.2019

client = commands.BreakupBot(command prefix = '/')
client.remove_command('help')

@client.event
async def on_message(message):
	role = get(message.server.roles, name='grieving')
	if client.user.id != message.author.id:
		if 'role grieving' in message.content:
			for server in client.servers:
				for channel in server.channels:
					if channel.name == 'progress-bot':
						await client.add_roles(message.author.id, role)
						await channel.send(message.channel, '{0.author.mention} changed to *grieving*'.format(message))
					return	

@client.event
async def on_message(message):
	role = get(message.server.roles, name='moved on')
	if client.user.id != message.author.id:
		if 'role moved on' in message.content:
			for server in client.servers:
				for channel in server.channels:
					if channel.name == 'progress-bot':
						await client.add_roles(message.author.id, role)
						await channel.send(message.channel '{0.author.mention} changed to *moved on*'.format(message))
					return	
			
@client.event
async def on_message(message):
	role = get(message.server.roles, name='healing')
	if client.user.id != message.author.id:
		if 'role healing' in message.content:
			for server in client.servers:
				for channel in server.channels:
					if channel.name == 'progress-bot':
						await client.add_roles(message.author.id, role)
						await channel.send(message.channel '{0.author.mention} changed to *healing*'.format(message))
					return	
			
@client.event
async def on_message(message):
	role = get(message.server.roles, name='just broke up')
	if client.user.id != message.author.id:
		if 'role just broke up' in message.content:
				for server in client.servers:
					for channel in server.channels:
						if channel.name == 'progress-bot':
							await client.add_roles(message.author.id, role)
							await channel.send(message.channel '{0.author.mention} changed to *just broke up*'.format(message))
						return	
			
@client.event
async def on_message(message):
	role = get(message.server.roles, id=<role id here>)
	if client.user.id != message.author.id:
		if 'role its complicated' in message.content:
		for server in client.servers:
			for channel in server.channels:
				if channel.name == 'progress-bot':
					await client.add_roles(message.author.id, role)
					await channel.send(message.channel '{0.author.mention} changed to *{}*'.format(message, role))
				return	
			
@info.error
async def info_error(ctx, error):
	if client.user.id != message.author.id:
		if isinstance(error, commands.BadArgument):
			for server in client.servers:
				for channel in server.channels:
					if channel.name == 'progress-bot':
						await ctx.send('This is not a valid command. Use the command /help to see all the available commands.')
			
@info.error
async def info_error(ctx, error):
text_channel = client.get_channel(#insert ID channel of the progress-bot channel)
	if client.user.id != message.author.id:
			for server in client.servers:
				for channel in server.channels:
					if channel.name != 'progress-bot':
						await client.send_message(message.channel'{0.author.mention} you cant access the bot functions in this channel. Please use the {1.mention} channel'.format(message,text_channel))
					if message.content.startswith('/role'):
						await client.delete_message(message)
					if message.content.startswith('/nc'):
						await client.delete_message(message)
				    if message.content.startswith('/encourage'):
						await client.delete_message(message)
						
@client.command()
async def help()						
text_channel = client.get_channel(#insert ID channel of the unsent_texts channel)
	embed = discord.Embed(
						title = 'Breakup Bot User Guide'
						description = 'This is the guide to all the commands for the Breakup Bot'
						colour = discord.Colour.#insert hex colour of the bu bot here()
						)
						
						embed.add_field(name='/role [moved on | healing | grieving | just broke up | its complicated]', value='Allows you to set up your role. You can access the {1.mention} channel with an assigned role'.format(message, text_channel), inline=False)
						embed.add_field(name='/role clear', value='Remove any role assigned to you.', inline=False)
						embed.add_field(name='/nc [start | restart | progress | stop]', value='Allows you to set up a timer for your no contact, restart it, check how long has been going on or stop it', inline=False)
						embed.add_field(name='/nc set [MM/DD/YYYY]', value='Allows you to set a date for your no contact if you did set it up when you began it', inline=False)
						embed.add_field(name='/encourage', value='A word of encouragement from the most supportive bot the world has ever seen', inline=False)
						
							

							
client.run(TOKEN)
