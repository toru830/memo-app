import React from 'react';
import {
  Home,
  CheckSquare,
  Lightbulb,
  ShoppingCart,
  Heart,
  Plus,
  Mic,
  type LucideIcon,
} from 'lucide-react';

export type TabType = 'all' | 'tasks' | 'ideas' | 'shopping' | 'thoughts';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onAddClick: () => void;
  onVoiceClick: () => void;
  isAddActive?: boolean;
  isVoiceActive?: boolean;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
  onAddClick,
  onVoiceClick,
  isAddActive = false,
  isVoiceActive = false,
}) => {
  const tabs: Array<{
    id: TabType;
    label: string;
    icon: LucideIcon;
    color: string;
    activeColor: string;
    bgColor: string;
  }> = [
    {
      id: 'all',
      label: 'すべて',
      icon: Home,
      color: 'text-gray-400',
      activeColor: 'text-blue-400',
      bgColor: 'bg-blue-600/20',
    },
    {
      id: 'tasks',
      label: 'タスク',
      icon: CheckSquare,
      color: 'text-gray-400',
      activeColor: 'text-green-400',
      bgColor: 'bg-green-600/20',
    },
    {
      id: 'ideas',
      label: 'アイデア',
      icon: Lightbulb,
      color: 'text-gray-400',
      activeColor: 'text-yellow-400',
      bgColor: 'bg-yellow-600/20',
    },
    {
      id: 'shopping',
      label: '買い物',
      icon: ShoppingCart,
      color: 'text-gray-400',
      activeColor: 'text-orange-400',
      bgColor: 'bg-orange-600/20',
    },
    {
      id: 'thoughts',
      label: '思い',
      icon: Heart,
      color: 'text-gray-400',
      activeColor: 'text-pink-400',
      bgColor: 'bg-pink-600/20',
    },
  ];

  return (
    <nav className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-4 pt-10 pb-6 bg-gradient-to-t from-black via-black/60 to-transparent">
      <div className="pointer-events-auto relative mx-auto max-w-2xl">
        <div className="pointer-events-auto absolute -top-12 left-1/2 flex -translate-x-1/2 gap-3">
          <button
            onClick={onAddClick}
            className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-200 ${
              isAddActive
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-105 shadow-xl'
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 shadow-lg'
            }`}
          >
            <Plus size={22} />
          </button>
          <button
            onClick={onVoiceClick}
            className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-200 ${
              isVoiceActive
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white scale-105 shadow-xl'
                : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:scale-105 shadow-lg'
            }`}
          >
            <Mic size={22} />
          </button>
        </div>

        <div className="pointer-events-auto flex items-center justify-between rounded-3xl border border-gray-800/60 bg-black/95 px-3 py-4 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.45)]">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-200 ${
                  isActive
                    ? `${tab.bgColor} ${tab.activeColor} scale-105`
                    : `${tab.color} hover:bg-gray-800`
                }`}
              >
                <Icon size={22} />
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
