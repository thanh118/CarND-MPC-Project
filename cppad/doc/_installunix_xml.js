var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'install.xml',
'installunix.xml'
];
var list_down2 = [
'install.xml',
'introduction.xml',
'ad.xml',
'adfun.xml',
'library.xml',
'preprocessor.xml',
'example.xml',
'appendix.xml'
];
var list_down1 = [
'installsubversion.xml',
'installunix.xml',
'installwindows.xml'
];
var list_current0 = [
'installunix.xml#Download Current Version',
'installunix.xml#Download Current Version.CPL License',
'installunix.xml#Download Current Version.GPL License',
'installunix.xml#Extraction',
'installunix.xml#User Documentation',
'installunix.xml#Developer Documentation',
'installunix.xml#Configure',
'installunix.xml#PrefixDir',
'installunix.xml#--with-Documentation',
'installunix.xml#--with-Introduction',
'installunix.xml#--with-Introduction.get_started',
'installunix.xml#--with-Introduction.exp_apx',
'installunix.xml#--with-Example',
'installunix.xml#--with-TestMore',
'installunix.xml#--with-Speed',
'installunix.xml#--with-PrintFor',
'installunix.xml#--with-SpeedExample',
'installunix.xml#--with-profiling',
'installunix.xml#--with-stdvector',
'installunix.xml#PostfixDir',
'installunix.xml#AdolcDir',
'installunix.xml#FadbadDir',
'installunix.xml#BoostDir',
'installunix.xml#CppErrorsAndWarnings',
'installunix.xml#make',
'installunix.xml#Final Installation'
];
function choose_across0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_across0[index-1];
}
function choose_up0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_up0[index-1];
}
function choose_down2(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down2[index-1];
}
function choose_down1(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down1[index-1];
}
function choose_down0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down0[index-1];
}
function choose_current0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_current0[index-1];
}
