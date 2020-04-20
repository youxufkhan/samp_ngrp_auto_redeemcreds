FileRead, Contents, code.txt
if not ErrorLevel  ; Successfully loaded.
{
	   	SendInput, t%Contents%{enter}
		Send {F8}
}

