FileRead, Contents, code.txt
if not ErrorLevel  ; Successfully loaded.
{
	   	SendInput, t%Contents%{enter}
		Sleep 3000 
		Send {F8}
}

