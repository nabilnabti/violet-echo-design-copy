
import { ReactNode } from "react";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import { Home, Info, HelpCircle, Settings, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className="border-r border-gray-200">
          <SidebarContent>
            <div className="px-6 py-8">
              <div className="flex items-center gap-2 mb-1">
                <Link to="/dashboard" className="flex items-center">
                  <span className="text-3xl font-bold">Neuronote</span>
                  <span className="text-[#925dc6] text-2xl ml-1">🧠</span>
                </Link>
              </div>
              <p className="text-sm text-gray-500 italic ml-1">propulsé par l'IA</p>
            </div>
            
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/dashboard")} className={`text-base ${isActive("/dashboard") ? "bg-gray-100 font-semibold" : ""}`}>
                    <Link to="/dashboard" className="pl-6 py-3 flex items-center">
                      <div className={`rounded-full p-2 mr-3 ${isActive("/dashboard") ? "bg-[#925dc6] text-white" : "bg-gray-100"}`}>
                        <Home className="h-5 w-5" />
                      </div>
                      <span>Accueil</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/dashboard/guide")} className={`text-base ${isActive("/dashboard/guide") ? "bg-gray-100 font-semibold" : ""}`}>
                    <Link to="/dashboard/guide" className="pl-6 py-3 flex items-center">
                      <div className={`rounded-full p-2 mr-3 ${isActive("/dashboard/guide") ? "bg-[#925dc6] text-white" : "bg-gray-100"}`}>
                        <Info className="h-5 w-5" />
                      </div>
                      <span>Guide</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/dashboard/support")} className={`text-base ${isActive("/dashboard/support") ? "bg-gray-100 font-semibold" : ""}`}>
                    <Link to="/dashboard/support" className="pl-6 py-3 flex items-center">
                      <div className={`rounded-full p-2 mr-3 ${isActive("/dashboard/support") ? "bg-[#925dc6] text-white" : "bg-gray-100"}`}>
                        <HelpCircle className="h-5 w-5" />
                      </div>
                      <span>Support</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/dashboard/settings")} className={`text-base ${isActive("/dashboard/settings") ? "bg-gray-100 font-semibold" : ""}`}>
                    <Link to="/dashboard/settings" className="pl-6 py-3 flex items-center">
                      <div className={`rounded-full p-2 mr-3 ${isActive("/dashboard/settings") ? "bg-[#925dc6] text-white" : "bg-gray-100"}`}>
                        <Settings className="h-5 w-5" />
                      </div>
                      <span>Paramètres</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            
            <div className="mt-auto px-6 py-8">
              <Link to="/dashboard/premium" className={`flex flex-col items-center gap-2 bg-[#925dc6] text-white rounded-lg p-4 hover:bg-[#7a4ea5] transition-colors ${isActive("/dashboard/premium") ? "bg-[#7a4ea5]" : ""}`}>
                <Zap className="w-6 h-6" />
                <span className="font-semibold">Notes illimitées</span>
                <span className="text-sm">Essai gratuit</span>
              </Link>
            </div>
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 overflow-auto bg-gray-50">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
