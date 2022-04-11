<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<style>
				
				h1{
					margin: 0 0 20 200px;
					}
					.ep{
						border-bottom:solid 1px red;
					}
					.hed{
						background-color: lightblue;
						border: 1px groove blue;
						border-radius:5px;
					}
					.ps{
						background-color: pink;
						border: groove 1px blue;
						border-radius:5px;
					}
			</style>
			</head>
			<body>
				<h2>Что-то на корейском</h2>
				<p class = "hed">
					<xsl:value-of select = "BODY/aboba/HED/to"/>
					<br/>
					<xsl:value-of select = "BODY/aboba/HED/from" />
				</p>
				<p class = "ps">
				
					<xsl:for-each select = "BODY/aboba/SMTH/cells">
					<xsl:sort select = "cells" order = "descending" />
						<xsl:value-of select ="cells" /><br/>
					</xsl:for-each>
				</p>
				<p class = "ep">
					<xsl:value-of select = "BODY/aboba/epilogue" /><br/>
				</p>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>