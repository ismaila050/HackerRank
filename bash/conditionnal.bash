#!/bin/bash
read var
case $var in 
	"y"|"Y")
		echo YES
		;;
	"n"|"N")
		echo NO
		;;
	*)
		echo error
esac
